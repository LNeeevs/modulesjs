const returned = (a,b) => { console.log(a+b) }

returned(10,20);

const farenheit = [10,20,30,40,50,60,70,80,90,100];

const transformCelsium = () => {
    return farenheit.map(farenheit => Math.round(((farenheit-32)*5/9)));
}

console.log(transformCelsium());