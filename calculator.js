class calculate {
    displayNode = null;

    constructor(calculateObj) {
        this.displayNode = calculateObj.displayNode;
        this.init(calculateObj);
    }

    add = (value) => {
        console.log(this.displayNode.value);
        console.log(value);
        // this.displayNode.value += value;
        let oldValue = this.displayNode.value;
        const promise = new Promise(((resolve, reject) => {
            resolve(oldValue + value);
        }));
        promise.then(result => {
            this.displayNode.value = result;
        })
    };

    clearAll = () => {
        this.displayNode.value = "";
    };

    calculateFun = () => {
        if (this.displayNode.value === "") {
            alert("请先输入");
            return;
        }
        try {
            this.displayNode.value = eval(this.displayNode.value);
        } catch (e) {
            alert("输入格式有误，请重新输入");
            this.clearAll();
        }

    };

    init() {
        const keyArray = [...document.getElementsByClassName("key")];
        const operateKeyArray = [...document.getElementsByClassName("operate-key")];

        const array = [...keyArray, ...operateKeyArray];
        array.forEach((key) => {
            if (key.id === "A/C") {
                key.onclick = this.clearAll;
            } else if (key.id === "equal") {
                console.log(key.id);
                key.onclick = this.calculateFun;
            } else {
                console.log(key.id);
                key.onclick = () => this.add(key.getAttribute("value"))
            }
        });
    }




}
