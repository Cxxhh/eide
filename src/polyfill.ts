/**
 * Polyfill for browser-specific globals in Node.js environment
 * 
 * 某些第三方库（如 x2js）在检测运行环境时会检查 window 和 ActiveXObject 变量是否存在，
 * 如果这些变量未定义，直接访问会抛出 ReferenceError
 * 
 * 通过将这些全局变量设置为 undefined，可以避免这个错误，
 * 同时让这些库的条件判断正确短路为 false
 */
if (typeof window === 'undefined') {
    (global as any).window = undefined;
}
if (typeof ActiveXObject === 'undefined') {
    (global as any).ActiveXObject = undefined;
}

