@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ========== 主脚本开始执行 ==========
echo.

call 1-to-one.bat
if errorlevel 1 (echo 合并失败 & pause & exit /b 1)

call 2-to-in.bat
if errorlevel 1 (echo 替换失败 & pause & exit /b 1)


:: 删除不需要的文件
del "apps-all.ts"

echo.
echo ========== ✅ 全部执行完成 ==========
echo 最终文件：output.json5
echo 请手动修改-版本号 +1
echo.
pause