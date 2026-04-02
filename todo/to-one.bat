@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion
:: 自动定位到【项目根目录】，不管从哪里运行都正确
PUSHD "%~dp0.."
set "ROOT_DIR=%CD%"
POPD
set "TS_SOURCE_DIR=%ROOT_DIR%\apps"
set "TS_OUTPUT=%ROOT_DIR%\all-apps.ts"
if not exist "%TS_SOURCE_DIR%" (
    echo 错误：找不到文件夹 !TS_SOURCE_DIR!
    pause
    exit /b 1
)
echo.
echo 正在清空输出文件...
echo.
echo. > "%TS_OUTPUT%"
set "first=1"
for %%f in ("%TS_SOURCE_DIR%\*.md") do (
    if !first!==1 (
        type "%%f" >> "%TS_OUTPUT%"
        set "first=0"
    ) else (
        echo , >> "%TS_OUTPUT%"
        type "%%f" >> "%TS_OUTPUT%"
    )
)
echo.
echo ✅ TS 合并完成：%TS_OUTPUT%
echo.

:: 删除all-apps.ts中所有的```符号（使用powershell处理UTF-8编码，避免乱码）
echo 正在清理文件中的```符号...
echo.
powershell -Command "(Get-Content -Path '%TS_OUTPUT%' -Encoding UTF8) -replace '```', '' | Set-Content -Path '%TS_OUTPUT%' -Encoding UTF8"
if !errorlevel! equ 0 (
    echo ✅ 成功删除所有```符号
) else (
    echo ❌ 清理```符号失败，请检查文件权限
)

echo.
echo ======================
echo 所有操作执行完成！
echo.
echo 输出文件：%TS_OUTPUT%
echo ======================
echo.
