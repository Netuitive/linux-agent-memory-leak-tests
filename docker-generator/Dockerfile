FROM alpine

RUN apk add --no-cache curl

RUN curl -s https://get.docker.com/builds/Linux/x86_64/docker-latest.tgz | tar --strip-components=1 -xz -C /usr/local/bin docker
RUN chmod a+x /usr/local/bin/*

CMD while true; do docker run --rm -d alpine sleep 120; sleep 20; done
