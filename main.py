from concurrent.futures import ThreadPoolExecutor
import sys
import requests

concurrent_calls = sys.argv[0]
url = 'https://app.inspekthor.com/minor'

def call_network_resource():
    requests.get(url).content
    print('done')

def generate_array(size):
    return [None]*size;

with ThreadPoolExecutor() as exe:
    l = generate_array(concurrent_calls)
    exe.map(call_network_resource, l)

        