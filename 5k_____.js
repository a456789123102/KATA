function parseMolecule(formula) {
    const stack = [];  // ใช้เพื่อเก็บข้อมูลที่แยกออกมา
    const result = {}; // ผลลัพธ์ที่เราต้องการเก็บจำนวนอะตอมของแต่ละธาตุ

    let i = 0;
    
    while (i < formula.length) {
        if (formula[i] === '(' || formula[i] === '[' || formula[i] === '{') {
            // ถ้าเป็นวงเล็บเปิด, push ลง stack
            stack.push(formula[i]);
            i++;
        } else if (formula[i] === ')' || formula[i] === ']' || formula[i] === '}') {
            // ถ้าเป็นวงเล็บปิด, pop กลับและคูณค่าทั้งหมดที่อยู่ในวงเล็บ
            let bracket = formula[i];
            let openBracket = bracket === ')' ? '(' : (bracket === ']' ? '[' : '{');
            let group = '';
            while (stack.length && stack[stack.length - 1] !== openBracket) {
                group = stack.pop() + group;
            }
            stack.pop(); // remove the open bracket
            
            let multiplier = '';
            i++; // move past the closing bracket
            while (i < formula.length && /[0-9]/.test(formula[i])) {
                multiplier += formula[i];
                i++;
            }
            multiplier = multiplier === '' ? 1 : parseInt(multiplier);
            
            // Process the group inside the brackets
            let subResult = parseMolecule(group); // recursive call to handle nested groups
            for (let atom in subResult) {
                result[atom] = (result[atom] || 0) + subResult[atom] * multiplier;
            }
        } else if (/[A-Z]/.test(formula[i])) {
            // ถ้าพบสัญลักษณ์ของธาตุ
            let element = formula[i];
            i++;
            if (i < formula.length && /[a-z]/.test(formula[i])) {
                element += formula[i]; // ถ้าเป็นธาตุ 2 ตัว
                i++;
            }
            
            let count = '';
            while (i < formula.length && /[0-9]/.test(formula[i])) {
                count += formula[i];
                i++;
            }
            count = count === '' ? 1 : parseInt(count);
            
            result[element] = (result[element] || 0) + count;
        }
    }

    return result;
}

// ตัวอย่างการทดสอบ
console.log(parseMolecule('H2O')); // { H: 2, O: 1 }
console.log(parseMolecule('Mg(OH)2')); // { Mg: 1, O: 2, H: 2 }
console.log(parseMolecule('K4[ON(SO3)2]2')); // { K: 4, O: 14, N: 2, S: 4 }


