function productReady(product, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(product);
            resolve('상품이 성공적으로 배송되었습니다.');
        }, delay);
    });
}

async function deliver() {
    console.log(await productReady(1, 1500));
    console.log(await productReady(2, 1000));
    console.log(await productReady(3, 2500));
}
