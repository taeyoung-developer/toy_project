#!/usr/bin/env python
import requests
def style_transfer(data):
    r = requests.post(
        "https://api.deepai.org/api/fast-style-transfer",
        files={
            'content': open(data['content'], 'rb'),
            'style': open(data['style'], 'rb'),
        },
        headers={'api-key': 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'}
    )
    change_style= r.json()
    return change_style

print(change_style)