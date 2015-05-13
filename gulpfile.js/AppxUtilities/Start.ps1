$cwd = $args[0]
cd $cwd
$result = .\gulpfile.js\AppxUtilities\Add-AppxPackageExt.ps1 .\src\AppxManifest.xml
$pfn = $result.Package.PackageFamilyName
Push-Location
Set-Location 'HKCU:\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings'
$apps = ls
$list = $apps | ForEach-Object {Get-ItemProperty $_.pspath}
#Moniker: contosoapptest_h91ms92gdsmmt
$list | ForEach-Object {if ($_.Moniker -eq $pfn) { $sid=$_.PSChildName}}
Write-Host $sid
Pop-Location
CheckNetIsolation loopbackexempt -a -p=$sid
$result | .\gulpfile.js\AppxUtilities\Launch-AppxPackage.ps1
