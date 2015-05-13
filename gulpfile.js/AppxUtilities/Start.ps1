$cwd = $args[0]
cd $cwd
$AddAppxPackageExt = $cwd + "\gulpfile.js\AppxUtilities\Add-AppxPackageExt.ps1"
<#
$manifest = $cwd + "\src\AppxManifest.xml"
Set-ExecutionPolicy Unrestricted
Write-Output $manifest
Invoke-Expression $AddAppxPackageExt $manifest
#>

.\gulpfile.js\AppxUtilities\Add-AppxPackageExt.ps1 .\src\AppxManifest.xml
