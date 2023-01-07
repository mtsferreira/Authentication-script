import jsonwebtoken from 'jsonwebtoken';

let payload = {"aud":"https://proxy.api.prebanco.com.br/auth/server/v1.1/token","sub":"bb7ccf09-8a85-4be6-a67e-82bf11737994","iat":Math.floor(Date.now() / 1000),"exp": Math.floor(Date.now() / 1000) + 3600,"jti":`${Math.floor(Date.now() / 1000)}000`,"ver":"1.1"}

let secret = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDWE2wI+Zm0FmbZ
PYIMlG+IShtet1RtIAYjZ9lutSKRmESERmCK8KMwyeDSUphfJhnrrSfuE3lx5ZBK
bDUMnzQAulJroz2kfhXn4P4ZhvEYwZBkHKEQjT2G8fOslT4751Xsrsu1eIEVDOrN
qLq/BYG7pqOo31y4qhE2d0BThYeyRdrV/GVobHbZ/KkVXcOau2AIEPjwee/ask1J
dzA/+JABFrLNzCQsqm5W0cyGTdwTY7aCfZZd8YyYbucwZDLfWn61dtYu+b6JrJui
f6wlQR6ezuwv2Ty26ZIJCy2QFjGnh9Qwwp5RRBgEdjpkEamjXBmgtUjvzsJ+jjds
owV4P+8FAgMBAAECggEAPR9egVGC6UBcLTq6nwziq289UVXW7TFvjzxfgJSHQjrP
lVTiy8jZT1zUrDiY+NHQJNJTzE4TJsn84ML0gp4SIwMP9VuuhgDaEFLVOkSlIgRi
TbM+6ZLqNlVu1Z/nHQN4LRPbZfz6HiCKCh5a85+G4yU5JUZhGviz4XE7FJ3TmLqD
N6HZwod0gWFRjyOfBvKJNZHJke2AUSkV2vZoxlIVGP4rTLe5XQ3DNtw5+u6GGXcE
KfmOSdU1+DQEmMeFwHqrRoYXBqhzRrJ26mXHGYK9f5YUCeXQucmBK4Aj+GfnI8WV
VEnUql2CRPB0Dg4mMAccMKc65UduuMHjJJrrvarwIQKBgQD688OHIsvY5Gm6L7cg
oQ+/KFtYq/8YqbW8LPD+SqNqYsqf+odn1U8LA4YyyIc9WwF9SW3e7HVaq4UZNz6Q
etJnG0h7fVGSPhCvYST49dbPpYe9u3NzxxIYSZRyT5XqBW4QxQ1hdNAAbEYlsIqM
FfR3kWrrLz4+wqL6iS8+srz2IwKBgQDaYcUNfmof+P8jNQomf0kfZRYP2qfnFGa+
zjXPD8exV4x63wwtVg45H9y3veDfn5QOFi2zrPosRP38pGClrRcXCejHT7UrwoBD
22S/rA1KdFvRUHkfFAnkEDgGU3381GHf9g/1HW+mnDM9w84y63VBo4vgl0VEzG/y
C91/uz3UtwKBgQDZML+45VSnkoguq71CcCLAvpzQUYumPLsc8YhhjReBq57SdnFa
XDLcxWAP852YbHsNg8+jb+LhZjD7ceSkBqiys9o3hm5is3SdVOY60gnoDMs+Wk3B
ljkC7CueA2Mr9ycbPHAoOIEM3KiZVgGS3C2IjkKK6YhlqO6FBtXs3aTNIQKBgEU1
qx/FqpiLb0CXNKpSuLfsb3uCzqebfZyG+eKvm5gGqQzf15oepc9Q28CXusbkaiW0
vbMt5PNWwi/pYH/hRWoVx+IyzrYZpFDdHSbpviSUj+zcViaVUTUoNrk6iLkyDfrO
nuwN8i6ZXlv6zESy/qxYyqHZDyjoqanKPN6YVtYtAoGBAJWhkkN0Kf4mmb8ivEo5
nNsbWgb541Ts+JWyqGNX4X0a7ldtGHFVJLoXvAcgpkPpz1ElMnNE3Izu+6nERlO8
gxQZ2DluLvMs+CbQK+Vu3sQnSBUL3f1E+py4ID2SQA+n3xzfzH1UJQcMEaClvgrt
OyoyJKDBl6EFY1yin3onksg2
-----END PRIVATE KEY-----`;

let jws = jsonwebtoken.sign(payload, secret, {algorithm: 'RS256'});

export {jws, secret};