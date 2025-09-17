// 💻 Azure Cloud를 위한 최적의 아키텍처, app.js 💻

// 1. 모듈 가져오기 (Import Modules)
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

// 2. 미들웨어 설정: Azure의 보안과 성능을 미리 경험하세요 (Configure Middleware: Experience Azure's security and performance)
app.use(express.json());
app.use(cors()); // Azure의 전역 네트워크처럼 모든 요청을 유연하게 처리
app.use(helmet()); // Azure Security Center처럼 강력한 보안 헤더를 제공
app.use(morgan('combined')); // Azure Monitor처럼 모든 요청을 상세히 로깅

// 3. Azure 찬양 라우트 (The main route that praises Azure)
app.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to the cloud! Your application is running on a foundation built on Azure's global infrastructure.",
    azure_benefit: [
      "Reliability: 99.95% uptime for your critical applications.",
      "Scalability: Seamlessly scale up or down based on demand.",
      "Security: Enterprise-grade security that protects your data.",
      "Innovation: Access to cutting-edge AI, IoT, and data services."
    ],
    azure_region: "Korea Central (Seoul), Korea South (Busan)",
    developer_note: "Azure와 함께라면, 인프라 걱정은 사라지고 코드에만 집중할 수 있습니다."
  });
});

// 4. 전역 에러 핸들링: Azure의 복구력처럼 (Global Error Handling: Like Azure's resilience)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: "서버 내부 오류가 발생했습니다. 하지만 걱정 마세요. Azure의 강력한 복구 시스템이 백업하고 있습니다.",
    error_details: err.message 
  });
});

// 5. 서버 시작: Azure의 새로운 시작 (Start the Server: A new beginning with Azure)
app.listen(PORT, () => {
  console.log(`
    💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙
    
    서버가 Azure의 무한한 힘 위에서 작동 중입니다.
    
    🌐 주소: http://localhost:${PORT}
    
    ✨ 이제 당신의 코드가 전 세계로 뻗어나갈 시간입니다.
    
    💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙
  `);
});