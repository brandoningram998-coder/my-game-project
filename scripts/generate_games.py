from __future__ import annotations

import json
import re
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import List

import openpyxl

ACRONYM_TAGS = {"rpg", "fps", "mmo", "mmorpg", "pve", "pvp", "io"}

ROOT_DIR = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT_DIR / "data" / "games.json"
SOURCE_PATH = ROOT_DIR.parent / "folder_list.xlsx"

UTC = timezone.utc


def collapse_whitespace(value: str | None) -> str:
    if not value:
        return ""
    return re.sub(r"\s+", " ", value).strip()


def format_title(raw: str | None) -> str:
    if not raw:
        return "Untitled Game"
    tokenized = re.split(r"[\s_-]+", raw.strip())
    words: List[str] = []
    for token in tokenized:
        if not token:
            continue
        if any(char.isdigit() for char in token):
            words.append(token.upper())
        elif token.isupper():
            words.append(token.title())
        else:
            words.append(token.capitalize())
    return " ".join(words) or "Untitled Game"


def split_tags(raw: str | None) -> list[str]:
    if not raw:
        return []
    tags: list[str] = []
    for chunk in raw.split(","):
        chunk = chunk.strip()
        if not chunk:
            continue
        words = []
        for word in chunk.split():
            lower = word.lower()
            if any(char.isdigit() for char in word):
                words.append(word.upper())
            elif lower in ACRONYM_TAGS:
                words.append(lower.upper())
            elif word.isupper():
                words.append(word.title())
            else:
                words.append(word.capitalize())
        formatted = " ".join(words)
        if formatted and formatted not in tags:
            tags.append(formatted)
    return tags


def normalize_category(tags: list[str]) -> str:
    if not tags:
        return "Action"
    primary = tags[0]
    cleaned = re.sub(r"\bGames?\b$", "", primary, flags=re.IGNORECASE).strip(" -")
    return cleaned or primary


def build_description(title: str, category: str, intro: str) -> str:
    summary = collapse_whitespace(intro)
    summary = re.sub(rf"^{re.escape(title)}\s+", "", summary, flags=re.IGNORECASE)
    summary = re.sub(r"^(is|are)\s+", "", summary, flags=re.IGNORECASE)
    summary = summary[0].lower() + summary[1:] if summary else ""
    detail = (
        f"It leans into {summary}"
        if summary
        else f"It leans into the punchiest traditions of modern {category.lower()} releases"
    )
    detail = detail.strip()
    if detail.endswith((".", "!", "?")):
        detail_sentence = f"{detail} "
    else:
        detail_sentence = f"{detail}. "
    text = (
        f"{title} on DrKabuda is purpose-built for instant {category.lower()} sessions that feel great on desktop, tablet, or phone. "
        f"{detail_sentence}"
        "Because everything streams directly from the cloud, you can drop in for a quick break, chase a few achievements, and bounce without waiting for downloads."
    )
    text = re.sub(r"([!?])\.(\s+)", r"\1\2", text)
    text = re.sub(r"\.\.(\s+)", r".\1", text)
    return text


def build_how_to_play(title: str, category: str) -> str:
    return (
        f"Press Play to dive into {title}, spend the opening minute studying HUD callouts, and ease through the tutorial beats before pushing for high scores. "
        f"Rotate through the core mechanics that define modern {category.lower()} releases - combining movement options, boosts, and smart resource usage - to keep momentum high. "
        "When the challenge spikes, toggle fullscreen, remap inputs from the pause overlay, and use short practice runs to internalize tougher sections."
    )


def build_editors_review(title: str, category: str) -> str:
    return (
        f"{title} nails the breezy-but-polished vibe we chase for the {category.lower()} shelf: clear UX, instantly readable objectives, and audio-visual flourishes that never get in the way of performance. "
        "Load times stay under a few seconds thanks to the lean HTML5 build, and the game maintains smooth framerates even on mid-range laptops. "
        "It is an easy recommendation for players building a curated DrKabuda playlist of modern browser hits."
    )


def generate_games() -> list[dict]:
    if not SOURCE_PATH.exists():
        raise FileNotFoundError(f"Cannot locate spreadsheet at {SOURCE_PATH}")

    workbook = openpyxl.load_workbook(SOURCE_PATH, data_only=True)
    sheet = workbook["Sheet1"]

    games: list[dict] = []
    start_date = datetime(2024, 1, 1, 9, 0, 0, tzinfo=UTC)

    for idx, row in enumerate(sheet.iter_rows(min_row=2, values_only=True), start=1):
        slug = collapse_whitespace(row[0] if len(row) > 0 else "")
        if not slug:
            continue
        raw_name = collapse_whitespace(row[1] if len(row) > 1 else "")
        title = format_title(raw_name or slug.split("_", 1)[-1])
        file_url = collapse_whitespace(row[2] if len(row) > 2 else "")
        thumbnail = collapse_whitespace(row[4] if len(row) > 4 else "")
        tag_list = split_tags(row[5] if len(row) > 5 else "")
        category = normalize_category(tag_list)
        intro = row[6] if len(row) > 6 else ""

        created_at = start_date + timedelta(days=idx)
        updated_at = created_at + timedelta(days=90)

        games.append(
            {
                "id": idx,
                "title": title,
                "slug": slug,
                "thumbnail_url": thumbnail,
                "category": category,
                "tags": tag_list,
                "description": build_description(title, category, intro),
                "how_to_play": build_how_to_play(title, category),
                "editors_review": build_editors_review(title, category),
                "file_url": file_url,
                "play_count": max(10000, 200000 - idx * 137),
                "created_at": created_at.strftime("%Y-%m-%dT%H:%M:%SZ"),
                "updated_at": updated_at.strftime("%Y-%m-%dT%H:%M:%SZ"),
            }
        )

    return games


def main() -> None:
    games = generate_games()
    DATA_PATH.write_text(json.dumps(games, indent=2))
    print(f"Wrote {len(games)} games to {DATA_PATH}")


if __name__ == "__main__":
    main()
