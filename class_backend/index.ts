console.log("타입스크립트를 실행했어요!!!");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer, gql } from "apollo-server";
// const { ApolloServer, gql } = require('apollo-server');

// 1. 타입
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board!]
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String - 연습용 (example)
    createBoard(createBoardInput: CreateBoardInput!): String # - 실제사용(backdend06)
  }
`;

// 2. API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터 베이스에 접속해서 게시물 가져오기

      const result = await Board.find();
      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      // 데이터베이스에 접속해서 게시물 등록하기

      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents ,
      });

      // 수정하면?
      // Board.update({ writer: "철수" }, { title: "제목2" }); //

      // 삭제하면?
      // Board.delete({ writer: "철수" }); //실제로는 안쓰는게 좋다
      // Board.delete({ writer: "철수" }, { deletedAt: new Date() });

      return "게시물을 등록했습니다!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true, // 주소가 같지 않아도 가능해진다. 차단은 어디서? 브라우저에서...
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5009,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",

  entities: [Board], // 테이블 만드는곳. 임포트 해서 갖고와랑
  synchronize: true, // 여기있는 그대로 동기화 해줄게.
  logging: true, // 로그 명령어 찍어줘
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공!");
    // 성공하면 이쪽
    // 백엔드 API를 오픈-리슨(24시간 동안 접속 가능하게끔 대기상태로 만들어 주기)
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패!");
    // 실패하면 이쪽
  });
