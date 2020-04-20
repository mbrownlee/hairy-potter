const id=1

export const makePottery = (shape, weight, height) => {
    id=id+1
    return {
        shape: shape,
        weight: weight,
        height: height,
        id: id
    }
}