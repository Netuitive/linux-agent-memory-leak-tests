FROM python:2

RUN pip install diamond setproctitle netuitive

RUN mkdir -p /var/log/diamond

RUN wget https://raw.githubusercontent.com/Netuitive/netuitive-diamond/master/src/diamond/handler/netuitive_handler.py

RUN mv netuitive_handler.py /usr/local/lib/python2.7/site-packages/diamond/handler/

COPY conf/diamond.conf diamond.conf

CMD diamond -c diamond.conf && touch top-output.txt && while true; do COLUMNS=1000 top -bc -n 1 | grep diamond | grep -v grep | grep -v /bin/sh | xargs -L1 -I % echo `date +"%Y-%m-%d %H:%M:%S"` % >> top-output.txt; sleep 60; done
