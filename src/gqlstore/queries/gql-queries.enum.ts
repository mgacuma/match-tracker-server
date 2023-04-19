export enum GqlQueries {
    getUpcomingTournaments = `query TournamentsByTopGames($perPage: Int) {
      tournaments(
        query: {
          perPage: $perPage, 
          sortBy: "startAt ASC", 
          filter: {
            upcoming:true, 
            isFeatured:true
          }
        }
      ) {
        nodes {
          id
          name
          slug
          isOnline
          city
          addrState
          countryCode
          startAt
          endAt
          images {
            type
            url
          }
        }
      }
    }`,

    getOngoingTournaments=`query OngoingTournaments($perPage: Int) {
      tournaments(
        query: {
          perPage: $perPage, 
          sortBy: "startAt ASC", 
          filter: {
            upcoming: true
            hasBannerImages:true
            countryCode: "US"
          }
        }
      ) {
        nodes {
          id
          name,
          isOnline
          city,
          countryCode
          addrState
          startAt
          endAt,
          images {
            type
            url
          }
          slug
          state
          numAttendees
          events {
            id
            name
          }
        }
      }
    }`,

    getEventsInTournament=`query EventsInTournament($tournamentId: ID) {
      tournament(id: $tournamentId) {
        events {
          id
          name
          slug
          startAt
          updatedAt
          state
          numEntrants
          type
          phases {
            id
            name
            state
            bracketType
          }
        }
      }
    }`,

    getSetsInPhase = `query SetsInPhase($phaseId: ID) {
      phase(id: $phaseId) {
        id
        bracketType
        state
        name
        phaseOrder
        sets(perPage: 10, sortType: MAGIC, filters: {hideEmpty: true}) {
          nodes {
            id
            fullRoundText
            identifier
            state
            startAt
            completedAt
            winnerId
            slots {
              id
              entrant {
                name
                initialSeedNum
              }
            }
          }
        }
      }
    }    
    `,
    

    getTopGames = `query TopGames($perPage: Int) {videogames(query:{perPage:$perPage, sortBy: "desc"}){nodes {name}}}`
}