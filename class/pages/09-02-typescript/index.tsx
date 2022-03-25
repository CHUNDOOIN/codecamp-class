export{}

// export default function TypescriptPAge ( ) {

//     //타입 추론
//     let aaa  = "안녕하세요"
//     aaa = 3

//     // 타입 명시
//     let bbb: string = "반갑습니다."

//     // 문자 타입
//     let ccc :string
//     ccc = 3
//     ccc = "반가워요!"

//     // 숫자 타입
//     let ddd: number = 10
//     ddd = "asdasd"

//     // 불린 타입
//     let eee: Boolean : true
//     eee = false
//     eee = "true"

//     // 배열 타입
//     let fff: number[] = [1,2,3,4,5,"안녕하세요"]
//     let ggg: string[] = ["철수", "영희" , 13]
//     let hhh :(number | string) [] = ["철수", "영희" , 13]

//     // 객체 타입
//     interface IProfile {
//         name : string
//         age : string | number
//         school : string
//         hobby? : string
//     }

//     let profile:IProfile = {
//         neme : "철수",
//         age : 8,
//         school:"다람쥐초등학교"
//     }

//     profile.age = "8살"
//     profile.school = 123

//     // 함수 타입
//     const add = (money1:number, money2:number, unit:string) : string => {
//         return money1 + money2 + unit
//     } 
//     const result = add(1000,2000,"원")


//     return <div>타입스크립트 연습하기</div>
// }