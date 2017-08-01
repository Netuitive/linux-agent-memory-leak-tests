FROM netuitive/docker-agent

RUN yum install -y git

RUN /opt/netuitive-agent/embedded/bin/pip install git+https://github.com/Netuitive/netuitive-client-python@bugfix/remove-metric-limit --upgrade
