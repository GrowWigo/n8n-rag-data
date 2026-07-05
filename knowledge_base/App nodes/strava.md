# Node: Strava

**Name**: strava
**Category**: input
**Description**: Consume Strava API
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: Activity (value: activity)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Comments (value: getComments)
  - Option: Get Kudos (value: getKudos)
  - Option: Get Laps (value: getLaps)
  - Option: Get Many (value: getAll)
  - Option: Get Streams (value: getStreams)
  - Option: Get Zones (value: getZones)
  - Option: Update (value: update)
- **name** (string): The name of the activity
- **type** (string): Type of activity. For example - Run, Ride etc.
- **sport_type** (options): Type of sport
  - Option: Alpine Ski (value: AlpineSki)
  - Option: Backcountry Ski (value: BackcountrySki)
  - Option: Badminton (value: Badminton)
  - Option: Canoeing (value: Canoeing)
  - Option: Crossfit (value: Crossfit)
  - Option: EBike Ride (value: EBikeRide)
  - Option: Elliptical (value: Elliptical)
  - Option: EMountain Bike Ride (value: EMountainBikeRide)
  - Option: Golf (value: Golf)
  - Option: Gravel Ride (value: GravelRide)
  - Option: Handcycle (value: Handcycle)
  - Option: HIIT (value: HighIntensityIntervalTraining)
  - Option: Hike (value: Hike)
  - Option: Ice Skate (value: IceSkate)
  - Option: Inline Skate (value: InlineSkate)
  - Option: Kayaking (value: Kayaking)
  - Option: Kitesurf (value: Kitesurf)
  - Option: Mountain Bike Ride (value: MountainBikeRide)
  - Option: Nordic Ski (value: NordicSki)
  - Option: Pickleball (value: Pickleball)
  - Option: Pilates (value: Pilates)
  - Option: Racquetball (value: Racquetball)
  - Option: Ride (value: Ride)
  - Option: Rock Climbing (value: RockClimbing)
  - Option: Roller Ski (value: RollerSki)
  - Option: Rowing (value: Rowing)
  - Option: Run (value: Run)
  - Option: Sail (value: Sail)
  - Option: Skateboard (value: Skateboard)
  - Option: Snowboard (value: Snowboard)
  - Option: Snowshoe (value: Snowshoe)
  - Option: Soccer (value: Soccer)
  - Option: Squash (value: Squash)
  - Option: Stair Stepper (value: StairStepper)
  - Option: Stand Up Paddling (value: StandUpPaddling)
  - Option: Surfing (value: Surfing)
  - Option: Swim (value: Swim)
  - Option: Table Tennis (value: TableTennis)
  - Option: Tennis (value: Tennis)
  - Option: Trail Run (value: TrailRun)
  - Option: Velomobile (value: Velomobile)
  - Option: Virtual Ride (value: VirtualRide)
  - Option: Virtual Row (value: VirtualRow)
  - Option: Virtual Run (value: VirtualRun)
  - Option: Walk (value: Walk)
  - Option: Weight Training (value: WeightTraining)
  - Option: Wheelchair (value: Wheelchair)
  - Option: Windsurf (value: Windsurf)
  - Option: Workout (value: Workout)
  - Option: Yoga (value: Yoga)
- **startDate** (dateTime): ISO 8601 formatted date time
- **elapsedTime** (number): In seconds
- **additionalFields** (collection): Additional Fields
  - Option: commute (value: undefined)
  - Option: description (value: undefined)
  - Option: distance (value: undefined)
  - Option: trainer (value: undefined)
- **activityId** (string): ID or email of activity
- **updateFields** (collection): Update Fields
  - Option: commute (value: undefined)
  - Option: description (value: undefined)
  - Option: gear_id (value: undefined)
  - Option: hide_from_home (value: undefined)
  - Option: name (value: undefined)
  - Option: type (value: undefined)
  - Option: sport_type (value: undefined)
  - Option: trainer (value: undefined)
- **activityId** (string): ID or email of activity
- **activityId** (string): ID or email of activity
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **keys** (multiOptions): Desired stream types to return
  - Option: Altitude (value: altitude)
  - Option: Cadence (value: cadence)
  - Option: Distance (value: distance)
  - Option: Gradient (value: grade_smooth)
  - Option: Heartrate (value: heartrate)
  - Option: Latitude / Longitude (value: latlng)
  - Option: Moving (value: moving)
  - Option: Temperature (value: temp)
  - Option: Time (value: time)
  - Option: Velocity (value: velocity_smooth)
  - Option: Watts (value: watts)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
