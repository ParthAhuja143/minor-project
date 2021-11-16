from concurrent.futures import ThreadPoolExecutor
import sys
import requests

concurrent_calls = sys.argv[0]
url = 'http://localhost:4000'

def call_network_resource():
    requests.get(url).content

def generate_array(size):
    return [None]*size;

with ThreadPoolExecutor() as exe:
    l = generate_array(concurrent_calls)
    exe.map(call_network_resource, l)

        