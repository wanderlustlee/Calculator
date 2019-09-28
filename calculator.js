class calculate {
    displayNode = null;
    colorStyle = null;

    constructor(calculateObj) {
        this.displayNode = calculateObj.displayNode;
        this.colorStyle = calculateObj.colorStyle;

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
        const havekeyBgColor = this.colorStyle != null && this.colorStyle.keyBgColor !== undefined;
        const havekeyColor = this.colorStyle != null && this.colorStyle.keyColor !== undefined;
        const haveOperateKeyBgColor = this.colorStyle != null && this.colorStyle.operateKeyBgColor !== undefined;
        const haveOperateKeyColor = this.colorStyle != null && this.colorStyle.operateKeyColor !== undefined;

        array.forEach((key) => {
            if (key.id === "A/C") {
                if (havekeyBgColor){
                    key.style.backgroundColor = this.colorStyle.keyBgColor;
                }
                if (havekeyColor){
                    key.style.color = this.colorStyle.keyColor;
                }

                key.onclick = this.clearAll;
            } else if (key.id === "equal") {
                if (haveOperateKeyBgColor){
                    key.style.backgroundColor = this.colorStyle.operateKeyBgColor;
                }
                if (haveOperateKeyColor){
                    key.style.color = this.colorStyle.operateKeyColor;
                }

                key.onclick = this.calculateFun;
            } else {
                if (key.className === "operate-key") {
                    if (haveOperateKeyBgColor){
                        key.style.backgroundColor = this.colorStyle.operateKeyBgColor;
                    }
                    if (haveOperateKeyColor){
                        key.style.color = this.colorStyle.operateKeyColor;
                    }
                }else {
                    if (havekeyBgColor){
                        key.style.backgroundColor = this.colorStyle.keyBgColor;
                    }
                    if (havekeyColor){
                        key.style.color = this.colorStyle.keyColor;
                    }
                }

                key.onclick = () => this.add(key.getAttribute("value"))
            }
        });
    }




}
