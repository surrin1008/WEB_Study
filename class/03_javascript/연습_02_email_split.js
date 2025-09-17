 const email = "codecamp@gmail.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'gmail.com']
email.split("@")[0]
// 'codecamp'
email.split("@")[1]
// 'gmail.com'
let userMail = email.split("@")[0]
// undefined
userMail
// 'codecamp'
let company = email.split("@")[1]
// undefined
company
// 'gmail.com'
let maskingmail = []
// undefined
maskingmail.push(userMail[0])
// 1
maskingmail.push(userMail[1])
// 2
maskingmail.push(userMail[2])
// 3
maskingmail.push(userMail[3])
// 4
maskingmail.push("*")
// 5
maskingmail.push("*")
// 6
maskingmail.push("*")
// 7
maskingmail.push("*")
// 8
maskingmail.join("")
// 'cdoe****'
maskingmail.join("") + "@" + company
// 'code****@gmail.com'