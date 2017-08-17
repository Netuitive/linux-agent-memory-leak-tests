# Metricly Linux Agent Memory Leak Tests

This repo was used to debug and verify a memory leak in the Metricly Linux Agent and is referenced in the blog post [Linux Agent Memory Leak - A lesson in Debugging Leaks](https://www.metricly.com/linux-memory-leak).

## How to Use

### The Docker Compose File

`docker-compose.yml` is the main driver for this repo. Inside are seven Docker containers (source in the corresponding folders) used during testing. Descriptions are below. The combinations used at any given time are described in the associated blog post.

Before use make sure to replace `<api-key>` with your own Metricly Infrastructure API key.

### Client Lib

This is a test Python script and Dockerfile used to verify the memory leak in the Metricly Python client library. Use your Metricly Custom API key when running this container. Running the container will show a memory leak of a single string on each iteration.

### Top Output Analysis

The first three test containers (`vanilla`, `vanilla-handler`, and `docker`) output `top` logs which this script was used to analyze. The script will format the results into a more human-readable CSV.
