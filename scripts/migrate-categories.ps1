# Category Migration Script
# Migrate 24 categories to 8 simplified categories

$categoryMapping = @{
    "Action" = "Action"
    "Action Gmaes" = "Action"
    "Multiplayer" = "Action"
    "Racing" = "Racing"
    "Sports" = "Racing"
    "Car" = "Racing"
    "Adventure" = "Adventure"
    "Platform" = "Adventure"
    "Puzzle" = "Puzzle"
    "Brain" = "Puzzle"
    "Hidden Object" = "Puzzle"
    "Skill" = "Puzzle"
    "Games For Girls" = "Casual"
    "Girls" = "Casual"
    "Mouse" = "Casual"
    "Cooking" = "Casual"
    "Arcade" = "Arcade"
    "Hypercasual" = "Arcade"
    "Funny" = "Arcade"
    "Management" = "Simulation"
    "Idle" = "Simulation"
    "Animal" = "Simulation"
    "3D" = "Action"
    "BOX2D" = "Puzzle"
}

Write-Host "Starting category migration..."

# Backup
$gamesFile = "d:\gane\gamebox\data\games.json"
$backupFile = "d:\gane\gamebox\data\games.json.backup"
Copy-Item $gamesFile $backupFile -Force
Write-Host "Backup created"

# Read and update
$games = Get-Content $gamesFile -Raw | ConvertFrom-Json
$updateCount = 0

foreach ($game in $games) {
    $oldCategory = $game.category
    if ($categoryMapping.ContainsKey($oldCategory)) {
        $newCategory = $categoryMapping[$oldCategory]
        if ($oldCategory -ne $newCategory) {
            $game.category = $newCategory
            $updateCount++
        }
    }
}

# Save
$games | ConvertTo-Json -Depth 10 | Set-Content $gamesFile -Encoding UTF8
Write-Host "Updated $updateCount games"
Write-Host "Migration complete!"
