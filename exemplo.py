#Título
#input do chat 
#a cada mensagem que o usuário enviar:
    #mostrar a mensagem que o usuário enviou no chat
    #pegar a pergunta e enviar para uma IA responder
    #exibir a resposta da IA na tela

#Streamlit -> Apenas com python criar o frontend e o backend
# a IA que vamos usar: OpenAI

import streamlit as st

st.write('Chatbot com IA')

if not "lista_mensagens" in st.session_state:
    st.session_state["lista_mensagens"] = []

#python -m streamlit run C:\Users\Anilson\OneDrive\Documentos\Faculdade\VSCode_Testando\Javascript,HTMLeMAIS\faculdade\exemplo.py
#python -m streamlit run exemplo.py
#python -m streamlit run --help

texto_usuario = st.chat_input('Digite sua mensagem aqui')

for mensagem in st.session_state["lista_mensagens"]:
    st.chat_message(mensagem["role"]).write(mensagem["content"])
    

if texto_usuario:
    st.chat_message("user").write(texto_usuario)
    mensagem_user = {"role": 'user', 'content': texto_usuario}
    st.session_state["lista_mensagens"].append(mensagem_user)

    #st.chat_message("assistant").write(resposta_ia)
    resposta_ia = "Você disse: " + texto_usuario
    st.chat_message("assistant").write(resposta_ia)
    mensagem_ia = {'role': 'assistant', 'content': resposta_ia}
    st.session_state["lista_mensagens"].append(mensagem_ia)