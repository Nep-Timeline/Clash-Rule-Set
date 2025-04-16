function FindProxyForURL(url, host) {
  return "PROXY 127.0.0.1:7890; SOCKS5 127.0.0.1:7890; DIRECT;";
}
