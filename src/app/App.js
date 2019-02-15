
export default class Class {
    constructor() {
        console.log(5);
        this.t=4;
        this.asf().then(() => {})
    }
    async asf() {
        const res = await pr(6);
        console.log(res);
    }
}

const pr = (a) => new Promise((res,rej) => {
    setTimeout(()=>res(a),2000)
});