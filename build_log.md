# Build Log

## Day 1

- Looked at a bunch of humvees on [GovPlanet](https://www.govplanet.com)
- Tried to get approximate weight for the vehicle and parts I would remove
  - Humvee total: 5,500 lbs
  - Engine alone: 650 lbs
  - Tranny alone: ??? lbs
- Purchased domain [electrichumvee.com](http://electrichumvee.com) from [Google Domains](https://domains.google.com)

## Day 2

- Started work on this site to see if I could actually find an audience for this
  - If I don't find an audience I might just record but not edit or post the videos
  - If I can find an audience, my hope is that having that audience can help me offset costs
- Started a [Google Cloud Platform](https://console.cloud.google.com) account
- Installed [Google Cloud SDK](https://cloud.google.com/sdk/)
- Started a GitHub repo for [Electric Humvee](https://github.com/theinfamousrj/electrichumvee)
- Installed [NodeJS](https://nodejs.org)

### List of commands I used to build this thing

#### Building the initial project

- `npx create-react-app electric-humvee`
- `cd electric-humvee`
- `git init`
- `echo "# ElectricHumvee" > README.md`
- `git add .`
- `git commit -am "Initial commit."`
- `git remote add origin https://github.com/theinfamousrj/electrichumvee.git`
- `git push -u origin master`

#### Building the docker image

- `npm run-script build`
- `docker build -t electric-humvee .`
- `docker tag electric-humvee theinfamousrj/electric-humvee:initial`
- `docker push theinfamousrj/electric-humvee`

#### Building the cloud platform

- `gcloud config set project ${YOUR_PROJECT_NAME}`
