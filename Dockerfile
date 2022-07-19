FROM node:16-bullseye

# Create folder and copy package.json
# Create app directory
WORKDIR /app

RUN apt-get update && \ 
    apt-get install --no-install-recommends psmisc=23.4-2 -y && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install pnpm
RUN npm install -g pnpm@7.5.0; \
    pnpm --version; \
    mkdir -p /usr/local/share/pnpm 
RUN pnpm setup; \
    export PNPM_HOME="/usr/local/share/pnpm" &&\
    export PATH="$PNPM_HOME:$PATH"; \
    pnpm bin -g;

# Install dependencies
RUN pnpm install

# Copy app files
USER 1000:1000
COPY . .

# run command
ENTRYPOINT ["/app/entrypoint.sh"]