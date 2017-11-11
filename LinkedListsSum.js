//Code for LeetCode #2


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    carry = 0;
    sum = [];
    flag1 = true;
    flag2 = true;
    do {
        currentDigit = l1.val + l2.val + carry;
        if(currentDigit >= 10) {
            currentDigit %= 10
            carry = 1;
        }else{carry = 0;}
        sum.push(currentDigit);

        if(l1.next === null) {
            l1.val = 0;
            flag1 = false;
        }else{l1 = l1.next;}
        if(l2.next === null) {
            l2.val = 0;
            flag2 = false;
        }else{l2 = l2.next;}        
    } while(flag1 || flag2 || carry)
    return sum;
}
var l1 = new ListNode(1);
l1.next = new ListNode(8);
var l2 = new ListNode(0);
console.log(addTwoNumbers(l1,l2))
