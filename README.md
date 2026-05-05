# 🚀 Landing Pages Collection

소마 팀 프로젝트의 **아이디어 검증을 위한 랜딩 페이지 모음 레포지토리**입니다.
각 팀원이 다양한 아이디어를 자유롭게 제안하고, 이를 빠르게 랜딩 페이지로 구현하여 비교하고 검증하는 것을 목표로 합니다.

---

## 📁 Repository Structure

모든 랜딩 페이지는 **아이디어 단위로 최상위에 나열**됩니다.

```plaintext
/
 ├─ idea-resume-ai/
 ├─ idea-devtool/
 ├─ idea-community/
 ├─ idea-xxx/
```

- 하나의 폴더 = 하나의 아이디어
- 각 폴더는 **완전히 독립적인 프로젝트**입니다

---

## 🧪 Rules

### 1. 아이디어 단위로 생성

- 새로운 아이디어는 최상위에 폴더로 추가합니다
- 네이밍은 기능/컨셉 중심으로 작성합니다

예시:

```plaintext
idea-resume-ai
idea-devtool-extension
idea-interview-helper
```

---

### 2. 독립 프로젝트 유지

각 폴더는 서로 영향을 주지 않도록 구성합니다.

- `package.json` 개별 관리
- 빌드/실행 독립
- 공통 설정 공유 ❌

---

### 3. 중복 아이디어 허용

- 동일한 주제라도 **접근 방식이 다르면 별도 아이디어로 취급**
- 빠른 실험을 위해 중복을 제한하지 않습니다

---

### 4. 최소 README 작성

각 아이디어 폴더에는 아래 내용을 포함해주세요:

또한, lean canvas 작성을 필수로 합니다.

```md
# Idea Name

## 👤 Author

- 이름

## 💡 Summary

- 한 줄 설명

## 🎯 Target User

- 누구를 위한 서비스인지

## 🚀 Value Proposition

- 어떤 문제를 해결하는지
```

---

## 🛠️ How to Run

각 랜딩 페이지는 개별적으로 실행합니다.

```bash
cd idea-name
npm install
npm run dev
```

---

## ⭐ Selection Process

- 모든 아이디어는 동일한 기준에서 비교됩니다
- 랜딩 페이지 완성도 + 아이디어 설득력을 기반으로 선정합니다
- 선택된 아이디어는 이후 서비스로 확장될 수 있습니다

---

## 🎯 Goal

- 빠르게 다양한 아이디어를 실험
- 랜딩 페이지를 통해 사용자 반응 가설 검증
- 가장 가능성 있는 아이디어를 선택 및 발전

---

## 📌 Notes

- 구조보다 **속도와 실행**을 우선합니다
- 과도한 설계는 지양합니다
- 아이디어는 자유롭게, 구현은 빠르게

---

## 👥 Team

- Soma Team Project (Backend Developers, 3 members)
  - 김현지 (팀장)

  - 권오빈

  - 최병주
