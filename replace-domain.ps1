$files = Get-ChildItem -Path "src" -Recurse -Include *.tsx,*.ts
$count = 0
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match 'trueinternetspeedtest\.com') {
        $newContent = $content -replace 'trueinternetspeedtest\.com', 'trueinternetspeedtest.com'
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        $count++
        Write-Host "Updated: $($file.FullName)"
    }
}
Write-Host "Total files updated: $count"

