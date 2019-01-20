# Github Pages

[Go!](http://hervit0.github.io/github-pages)

## Notes

### Deployment tutorial

- [Using `gh-pages` and `create-react-app`](https://github.com/gitname/react-gh-pages). Tip: Create your git repo first
- deploy: `npm run deploy`

### Troubleshooting

```
npm WARN lifecycle The node binary used for scripts is /home/hervito/.asdf/shims/node but npm is using /home/hervito/.asdf/installs/nodejs/11.7.0/bin/node itself. Use the `--scripts-prepend-node-path` option to include the path for the node binary npm was executed with.
```
=> `npm config set scripts-prepend-node-path true`

```
Error: ENOSPC: System limit for number of file watchers reached
```
=> `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
