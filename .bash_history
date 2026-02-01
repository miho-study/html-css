git status
git stash
git pull origin main
From github.com:miho-study/html-css
 * branch            main       -> FETCH_HEAD
Auto packing the repository in background for optimum performance.
See "git help gc" for manual housekeeping.
warning: The last gc run reported the following. Please correct the root cause
and remove .git/gc.log
Automatic cleanup will not be performed until the file is removed.
warning: There are too many unreachable loose objects; run 'git prune' to remove them.
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint: 
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.
git pull --no-rebase
rm .git/gc.log
git gc --prune=now
git clean -n
git add　coachtech/html-css/baseball.html　coachtech/html-css/detail.html　coachtech/html-css/index.html　coachtech/html-css/information.html　coachtech/html-css/js/yubinbango.js
git stash
