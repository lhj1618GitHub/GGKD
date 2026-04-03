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
    echo ❌ 错误：找不到文件夹 !TS_SOURCE_DIR!
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
echo ✅ 合并完成！
echo.

