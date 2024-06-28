---
title: Building RAG based on Ollama
layout: post
categories: 
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---
This is on Mac OS Sequoia

1. Install ollama
2. Install conda/miniconda
3. Create new environment with 

```zsh
conda create -n ollama
conda activate ollama
```
4. Install python and package (note that all were done via `pip` afterwards)
```sh
conda search python
conda install python=3.12.4
```
5. Supporting libraries install
```sh
pip install llama-index
pip install llama-index-llms-ollama
pip install langchain-community
pip install llama_index.embeddings.huggingface
pip install ipywidgets
pip install chromadb
pip install llama-index-vector-stores-chroma
```
Make a `settings.py` as change `Extra guides.` to your customised directive
```py
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader, Settings
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.llms.ollama import Ollama
# persistent store
from llama_index.core.storage.docstore import SimpleDocumentStore
from llama_index.core.storage.index_store import SimpleIndexStore
from llama_index.core.vector_stores import SimpleVectorStore
from llama_index.core import StorageContext
# chrome store
import chromadb
from llama_index.vector_stores.chroma import ChromaVectorStore

# streaming
from llama_index.core import get_response_synthesizer

# bge-base embedding model
Settings.embed_model = HuggingFaceEmbedding(model_name="BAAI/bge-base-en-v1.5")
# ollama
Settings.llm = Ollama(model="llama3", request_timeout=360.0)

# initialize client, setting path to save data
db = chromadb.PersistentClient(path="chroma_db")

# create collection
chroma_collection = db.get_or_create_collection(working_collection)

# assign chroma as the vector_store to the context
vector_store = ChromaVectorStore(chroma_collection=chroma_collection)

# load some documents
documents = SimpleDirectoryReader(working_dir).load_data()

# create your index
index =  VectorStoreIndex([])

if run_time == 0:
    storage_context = StorageContext.from_defaults(vector_store=vector_store)
    index = VectorStoreIndex.from_documents(documents,storage_context=storage_context)
    index.storage_context.persist(persist_dir="persist_data")
else:
    storage_context = StorageContext.from_defaults(vector_store=vector_store, persist_dir="persist_data")
    # index = VectorStoreIndex.from_documents(vector_store, storage_context=storage_context)
    index = VectorStoreIndex([], storage_context=storage_context)

query_engine = index.as_query_engine(streaming=True, similarity_top_k=1)

def ask(question):
    guides = "Extra guides."
    response = query_engine.query(guides+question)
    response.print_response_stream()

def update_doc():
    from llama_index.core import VectorStoreIndex
    index = VectorStoreIndex([])
    for doc in documents:
        index.insert(doc)
```
and save it to the structure
```zsh
folder
	|data
		|text_data.txt
	|settings.py
```
> The RAG is now ready
Then in a notebook we can use the RAG as
```py
working_collection = "quickstart"
working_dir = "./data"
run_time = 1
```
where `run_time` should be set to 0 at the first run to generate vector store, `working_collection` to your collection, and `data` to your folder. 

Load the next cell
```py
%run -i settings.py
```
and then query as
```py
ask("what is the main point of the text?")
```