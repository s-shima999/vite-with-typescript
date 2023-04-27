export default function abc() {
    console.log('abc')
}
// abc()
declare let global: {
    [x: string]: any;
};

global.abc = abc;
