# 1️⃣ 베이스 이미지
FROM node:18-alpine

# 2️⃣ 작업 디렉터리 생성
WORKDIR /app

# 3️⃣ package.json과 package-lock.json 복사
COPY package*.json ./

# 4️⃣ 의존성 설치
RUN npm install --production

# 5️⃣ 앱 소스 전체 복사
COPY . .

# 6️⃣ 앱 포트 노출
EXPOSE 3000

# 7️⃣ 앱 실행
CMD ["node", "app.js"]