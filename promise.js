function Promise(executor) {

    this.PromiseState = 'pending';
    this.PromiseResult = null;
    this.callBack = [];
    //保存实例对象的this 否则下面的resolve和reject会丢失
    const self = this;

    function resolve(data) {
        // 状态只能更改一次
        if (self.PromiseState !== 'pending') return;
        // 1. 改变状态（promisestate）
        self.PromiseState = 'fulfilled';
        // 2. 设置结果值（promiseresult）
        self.PromiseResult = data;
        // 调用成功的回调函数
        setTimeout(() => {
            self.callBack.forEach(item => {
                item.onresolved(data);
            });
        });
    }

    function reject(data) {
        // 状态只能更改一次
        if (self.PromiseState !== 'pending') return;
        // 1. 改变状态（promisestate）
        self.PromiseState = 'rejected';
        // 2. 设置结果值（promiseresult）
        self.PromiseResult = data;
        // 调用失败的回调函数
        setTimeout(() => {
            self.callBack.forEach(item => {
                item.onrejected(data);
            });
        });

    }

    try {
        executor(resolve, reject);
    }
    catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (resolved, rejected) {
    const self = this;
    //异常穿透 省略reject
    if (typeof rejected !== 'function') {
        rejected = reason => {
            throw reason;
        }
    }
    //省值调用 可以省略resolve
    if (typeof resolved !== 'function') {
        resolved = value => {
            return value;
        }
    }
    return new Promise((resolve, reject) => {

        //代码相似度太高 封装
        function callback(type) {
            try {
                let result = type(self.PromiseResult);
                if (result instanceof Promise) {
                    //如果回调函数是一个promise 那么结果由回调的promise决定
                    result.then(v => {
                        resolve(v);
                    }, r => {
                        reject(r);
                    });
                } else {
                    //如果回调函数是普通函数 那么结果是success
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        }

        //具体情况
        if (this.PromiseState === 'fulfilled') {
            setTimeout(() => {
                callback(resolved);
            });
        }

        if (this.PromiseState === 'rejected') {
            setTimeout(() => {
                callback(rejected);
            });
        }

        if (this.PromiseState === 'pending') {
            this.callBack.push({
                onresolved: function () {
                    callback(resolved);
                },
                onrejected: function () {
                    callback(rejected);
                }
            });
        }

    });
}

Promise.prototype.catch = function (rejected) {
    return this.then(undefined, rejected);
}

Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let result = [];
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                // 对象成功
                count++;
                result[i] = v;
                if (count === promises.length) {
                    resolve(result);
                }
            }, r => {
                // 对象失败
                reject(r);
            })
        }
    })
}

Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                resolve(v);
            }, r => {
                reject(r);
            })
        }
    })
}



let p = new Promise((resolve, reject) => {
    resolve('ok');
})