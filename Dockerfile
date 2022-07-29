FROM node:18-bullseye-slim

ENV HOME=/home/steepcliff \
    USER=steepcliff \
    UID=10000 \
    GROUP=steepcliff \
    GID=10000

RUN groupadd -g ${GID} ${GROUP} && \
    useradd -d ${HOME} -u ${UID} -g ${GID} -m -s /bin/bash ${USER} && \
    chmod -R 755 ${HOME} && \
    chown -R ${USER}:${GROUP} ${HOME}

USER $USER
WORKDIR $HOME

COPY --chown=steepcliff:steepcliff . ${HOME}

RUN npm install 

CMD ["npm", "start"]
