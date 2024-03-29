//封装操作localstorage本地存储的方法

var storage = {

    //存储
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    //取出数据
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    // 删除数据
    remove(key) {
        localStorage.removeItem(key);
    },
    //清空本地存储
    clear(key) {
        localStorage.clear(key);
    }
}

export default storage;