FROM python:2

RUN pip install netuitive==0.2.3 pympler

COPY . .

ENV API_URL https://api.app.netuitive.com/ingest

CMD python test.py
