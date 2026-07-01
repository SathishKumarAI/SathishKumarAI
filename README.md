# Sathish Kumar

ML/AI engineer. I build end-to-end systems: LLM and RAG services, computer-vision
pipelines, and the full-stack apps and tooling around them. I like taking a problem from
model to a thing a person can actually open and use.

Calm, disciplined, focused on what I can control.

## What I build

- **Grounded outputs.** When a model answers, it should point back at the source it used,
  not ask you to trust it.
- **Local-first by default.** Most of my apps run offline with no account and no API key.
  A single env var opts into a hosted model when you want one.
- **Shipped, not notebooks.** FastAPI and Next.js, Docker, CI, and in some cases a live
  URL a non-technical user can open in a browser.
- **Across domains.** Retrieval, object detection and tracking, knowledge graphs, data
  extraction, and reproducible dev environments.

## Selected projects

| Project | Domain | What it does | Stack |
|---|---|---|---|
| [ai-due-diligence-copilot](https://github.com/SathishKumarAI/ai-due-diligence-copilot) | LLM / RAG | Q&A over deal documents (pitch decks, 10-Ks, term sheets) that cites the source passage for every claim. Runs offline first. | FastAPI, Next.js, Ollama/Claude, embeddings |
| [rag-pipeline-langchain](https://github.com/SathishKumarAI/rag-pipeline-langchain) | MLOps | Retrieval pipeline on AWS with an MLflow-tracked eval loop and a GitOps deploy path. | LangChain, LangGraph, Pinecone, MLflow, S3/DynamoDB, K8s/Helm |
| [federated-yolov8-object-detection](https://github.com/SathishKumarAI/federated-yolov8-object-detection) | Computer vision | YOLOv8 trained across distributed clients with Flower, so raw data never leaves the client. | YOLOv8, Flower, PyTorch |
| [pickleball-vision-llm](https://github.com/SathishKumarAI/pickleball-vision-llm) | Computer vision | Detection and tracking pipeline over match footage, split into modular vision, ML, API, and frontend layers. | Python, OpenCV, PostgreSQL, Docker |
| [instagram-reels-extractor](https://github.com/SathishKumarAI/instagram-reels-extractor) | Applied ML / data | Turns reels into structured text (caption, transcript, OCR, vision), renders a PDF and docs site, and adds local semantic search. | Python, transcription, OCR, embeddings |
| [pediatric-care-platform](https://github.com/SathishKumarAI/pediatric-care-platform) | Full-stack app | Local-first desktop app: an AI symptom checker over a symptom-to-disease knowledge graph plus clinical workflows. Synthetic data. | Tauri, FastAPI, Next.js 15 |
| [pickleball-shuffle](https://github.com/SathishKumarAI/pickleball-shuffle) | Full-stack app | Mobile-first web app: draw a twist card mid-match and keep score, no login and no signal needed after first load. Live and deployed. | React, TypeScript, PWA |
| [bujo](https://github.com/SathishKumarAI/bujo) | Full-stack app | A private bullet-journal web app with rapid logging and habit tracking. No backend, data stays in the browser. | React, TypeScript, Tailwind |
| [rocky-dev-setup](https://github.com/SathishKumarAI/rocky-dev-setup) | Dev tooling | One command to stand up a Rocky Linux dev environment on mise and chezmoi. | Shell, mise, chezmoi |

More in the [repositories tab](https://github.com/SathishKumarAI?tab=repositories),
including two more cited RAG services (`engineering-intelligence-hub`,
`healthcare-knowledge-navigator`) and `loan-division-emi-tracker` (variable-rate EMI split
across borrowers with a worksheet view of every calculation).

## Stack

| Area | Tools |
|---|---|
| LLM / RAG | LangChain, LangGraph, Ollama, Claude, Pinecone, sentence-transformers, citation-grounded retrieval |
| Computer vision | YOLOv8, OpenCV, object detection & tracking, federated learning (Flower), PyTorch |
| MLOps & infra | MLflow, Docker, GitHub Actions, Kubernetes, Helm, mise, chezmoi |
| Backend & data | Python, FastAPI, PySpark, PostgreSQL, DynamoDB, S3, semantic search |
| Frontend & apps | Next.js, React, TypeScript, Tailwind, Tauri |

## Activity

Languages I work in, most-used first:

![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Shell](https://img.shields.io/badge/Shell-4EAA25?logo=gnubash&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?logo=jupyter&logoColor=white)

<p>
  <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=SathishKumarAI&hide_border=true&background=00000000&stroke=cba6f7&ring=89b4fa&fire=89b4fa&currStreakLabel=cba6f7&sideLabels=cdd6f4&dates=6c7086&currStreakNum=cdd6f4&sideNums=cdd6f4" alt="Contribution streak" />
</p>

## Contact

- Email: sathishkumar786.ml@gmail.com
- LinkedIn: [in/SathishKumarAI](https://www.linkedin.com/in/SathishKumarAI)

Open to ML/AI engineering roles and collaboration across LLM apps, computer vision, and
full-stack work. If something here is useful to you, reach out.
