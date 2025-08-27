# 1. Node.js 18 버전 기반 이미지 사용
FROM node:18-alpine

# 2. 작업 디렉터리 설정
WORKDIR /app

# 3. package.json과 package-lock.json 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 나머지 앱 소스 복사
COPY . .

# 6. 컨테이너 포트 설정
EXPOSE 3000

# 7. 컨테이너 실행 명령
CMD ["node", "app.js"]