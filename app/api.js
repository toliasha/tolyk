const Request = (method, url, callback, body = null, headers = {}) => {
    fetch(url, {
        method,
        headers: {
            "Accept": "application/json",
            ...headers
        },
        body: body ? JSON.stringify(body) : null
    })
    .then(res => res.json())
    .then(res => {
        callback(res);
    })
    .catch(error => {
        callback(error);
    });
}

export function GET(url, cb) {
    Request('GET', url, cb);
}

export function POST(url, body, cb) {
    Request('POST', url, cb, body);
}

export function PUT(url, cb) {
    Request('PUT', url, cb);
}

export function DELETE(url, cb) {
    Request('DELETE', url, cb);
}
