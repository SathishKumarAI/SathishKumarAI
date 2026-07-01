# Sathish Kumar

ML engineer. I build retrieval-augmented generation (RAG) systems and computer-vision
pipelines, and I care about the parts that usually get skipped: grounding answers in
sources, running offline, and making the thing actually deploy.

Calm, disciplined, focused on what I can control.

Most of my recent work is a set of production-shaped RAG services that share one rule:
**every answer cites the passage it came from, and the whole stack runs free and offline
on Ollama before you ever pay for a hosted model.** Same discipline, three domains.

## What I work on

- **RAG that you can trust.** Citation-grounded retrieval, so an answer points back at
  the source passage instead of asking you to trust the model.
- **Local-first by default.** Ollama plus open-source embeddings out of the box; a
  single env var swaps in Claude when you want it. No API key required to try the work.
- **Shipped, not notebooks.** FastAPI backends, Next.js frontends, Docker, and CI so a
  non-technical user can open a browser and use it.
- **Computer vision.** Object detection and tracking, including federated training where
  the data cannot leave the client.

## Featured work

| Project | What it is | Stack |
|---|---|---|
| [ai-due-diligence-copilot](https://github.com/SathishKumarAI/ai-due-diligence-copilot) | RAG Q&A over deal documents (pitch decks, 10-Ks, term sheets). Answers cite the source passage for every claim. | FastAPI, Next.js, Ollama/Claude, open-source embeddings |
| [engineering-intelligence-hub](https://github.com/SathishKumarAI/engineering-intelligence-hub) | RAG over internal engineering docs (RFCs, runbooks, ADRs, API references) with per-claim citations. | FastAPI, Next.js, Ollama/Claude |
| [healthcare-knowledge-navigator](https://github.com/SathishKumarAI/healthcare-knowledge-navigator) | Clinical RAG over medical reference docs. Cited, synthetic-data-only, framed as support for professionals, not medical advice. | FastAPI, Next.js, Ollama/Claude |
| [rag-pipeline-langchain](https://github.com/SathishKumarAI/rag-pipeline-langchain) | The heavier pipeline: LangChain/LangGraph retrieval on AWS, Pinecone vector store, MLflow tracking, GitOps deploy. | LangChain, LangGraph, Pinecone, MLflow, S3/DynamoDB, K8s/Helm |
| [federated-yolov8-object-detection](https://github.com/SathishKumarAI/federated-yolov8-object-detection) | YOLOv8 trained across distributed clients with Flower for collaborative detection without moving the raw data. | YOLOv8, Flower, PyTorch |
| [pediatric-care-platform](https://github.com/SathishKumarAI/pediatric-care-platform) | Local-first desktop app: AI symptom checker over a symptom→disease knowledge graph plus clinical workflows. Prototype on synthetic data. | Tauri, FastAPI, Next.js 15 |

More in the [repositories tab](https://github.com/SathishKumarAI?tab=repositories),
including `pickleball-vision-llm` (detection + tracking pipeline) and `rocky-dev-setup`
(a one-command Rocky Linux dev environment on mise + chezmoi).

## Stack

| Area | Tools |
|---|---|
| LLM / RAG | LangChain, LangGraph, Ollama, Claude, Pinecone, sentence-transformers, citation-grounded retrieval |
| Computer vision | YOLOv8, OpenCV, object detection & tracking, federated learning (Flower) |
| MLOps | MLflow, evaluation pipelines, Docker, GitHub Actions, Kubernetes, Helm |
| Backend & data | Python, FastAPI, PySpark, PostgreSQL, DynamoDB, S3 |
| Frontend & app | Next.js, TypeScript, React, Tauri |

## Activity

Languages I work in, most-used first:

![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?logo=jupyter&logoColor=white)
![Shell](https://img.shields.io/badge/Shell-4EAA25?logo=gnubash&logoColor=white)

<p>
  <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=SathishKumarAI&hide_border=true&background=00000000&stroke=cba6f7&ring=89b4fa&fire=89b4fa&currStreakLabel=cba6f7&sideLabels=cdd6f4&dates=6c7086&currStreakNum=cdd6f4&sideNums=cdd6f4" alt="Contribution streak" />
</p>

## Contact

- Email: sathishkumar786.ml@gmail.com
- LinkedIn: [in/SathishKumarAI](https://www.linkedin.com/in/SathishKumarAI)

Open to ML engineering roles and collaboration on RAG or vision work. If something here
is useful to you, feel free to reach out.
