export const gates = [
    {
        type: "AND Gate",
        pic: "assets/images/and_gate.jpg",
        inputs: "2",
        id: "andgate",
    },
    {
        type: "OR Gate",
        pic: "data:image/png;base64,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",
        inputs: "2",
        id: "orgate",
    },
    {
        type: "NAND Gate",
        pic: "https://www.kindpng.com/picc/m/701-7017665_nand-gate-logic-gate-electronics-symbol-hd-png.png",
        inputs: "2",
        id: "nandgate",
    },
    {
        type: "NOR Gate",
        pic: "https://static.vecteezy.com/system/resources/previews/007/230/181/non_2x/nor-gate-line-icon-vector.jpg",
        inputs: "2",
        id: "norgate",
    },
    {
        type: "XOR Gate",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9lK_A6UnDT_09nx60gWPP8hc-A4y_4DA2Cg&usqp=CAU",
        inputs: "2",
        id: "xorgate",
    },
    {
        type: "XNOR Gate",
        pic: "https://w7.pngwing.com/pngs/477/812/png-transparent-xnor-gate-xor-gate-nand-gate-logic-gate-symbol-miscellaneous-angle-text.png",
        inputs: "2",
        id: "xnorate",
    },
    {
        type: "NOT Gate",
        pic: "https://www.watelectronics.com/wp-content/uploads/Basic-NOT-Gate.png",
        inputs: "1",
        id: "notgate",
    },
    {
        type: "BUF Gate",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrlma_RUVUirrWanNeo5yRdCsh6b_k5xdLw&usqp=CAU",
        inputs: "1",
        id: "bufgate",
    },

]