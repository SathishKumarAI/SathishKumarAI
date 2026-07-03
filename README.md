# Sathish Kumar

I work across the full data-to-AI stack and care about the problem more than the title:
data engineering, data science, machine learning, and AI engineering. The thread through
all of it is the same. I take a real problem end to end, from the data and the model to a
working interface, and ship something a person can actually open and use. The work tends to
run offline, ground its answers in real sources, and be easy to try in a minute, because
that is what makes it worth building. Open to roles at any point on that path, and to any
domain.

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
| [PB Card Deck](https://github.com/SathishKumarAI/pb-card-deck) | Full-stack app | Mobile-first pickleball card game + scorekeeper: draw a twist card mid-match and keep score, no login and no signal needed after first load. [Live](https://pb-card-deck.vercel.app). | React, TypeScript, PWA |
| [bujo](https://github.com/SathishKumarAI/bujo) | Full-stack app | A private bullet-journal web app with rapid logging and habit tracking. No backend, data stays in the browser. | React, TypeScript, Tailwind |
| [rocky-dev-setup](https://github.com/SathishKumarAI/rocky-dev-setup) | Dev tooling | One command to stand up a Rocky Linux dev environment on mise and chezmoi. | Shell, mise, chezmoi |

More in the [repositories tab](https://github.com/SathishKumarAI?tab=repositories),
including two more cited RAG services (`engineering-intelligence-hub`,
`healthcare-knowledge-navigator`) and `loan-division-emi-tracker` (variable-rate EMI split
across borrowers with a worksheet view of every calculation).

## Stack

| Area | Tools |
|---|---|
| Data engineering | PySpark, ETL pipelines, PostgreSQL, DynamoDB, S3, SQL |
| Data science | pandas, NumPy, scikit-learn, exploratory analysis, evaluation metrics |
| LLM / RAG | LangChain, LangGraph, Ollama, Claude, Pinecone, sentence-transformers, citation-grounded retrieval |
| Computer vision | YOLOv8, OpenCV, object detection & tracking, federated learning (Flower), PyTorch |
| MLOps & infra | MLflow, Docker, GitHub Actions, Kubernetes, Helm, mise, chezmoi |
| Backend & apps | Python, FastAPI, Next.js, React, TypeScript, Tauri |

## Activity

Languages I work with:

![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![R](https://img.shields.io/badge/R-276DC3?logo=r&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Shell](https://img.shields.io/badge/Shell-4EAA25?logo=gnubash&logoColor=white)

<p>
  <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=SathishKumarAI&hide_border=true&background=00000000&stroke=cba6f7&ring=89b4fa&fire=89b4fa&currStreakLabel=cba6f7&sideLabels=cdd6f4&dates=6c7086&currStreakNum=cdd6f4&sideNums=cdd6f4" alt="Contribution streak" />
</p>

## Contact

- Email: sathishkumar786.ml@gmail.com
- LinkedIn: [in/SathishKumarAI](https://www.linkedin.com/in/SathishKumarAI)

Open to data engineering, data science, ML, and AI engineering roles, and to any domain.
If something here is useful to you, reach out.
