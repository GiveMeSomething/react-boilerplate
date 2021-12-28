import { Icon } from '@iconify/react'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <div className="w-screen h-screen container flex flex-col items-center justify-center">
                        <p className="text-6xl text-blue-500 p-2">
                            My React Boilerplate
                        </p>
                        <p className="text-2xl p-4">
                            with pre-configured ESLint, Prettier, lint-staged
                            and Husky
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="border-2 border-blue-300 rounded-2xl">
                                <div className="flex flex-col items-center justify-center px-8 py-4">
                                    <div className="flex items-center">
                                        <Icon
                                            icon="logos:react"
                                            className="text-4xl m-2"
                                        />
                                        <p className="text-4xl text-blue-500">
                                            React
                                        </p>
                                    </div>

                                    <p className="text-center">
                                        A JavaScript library for building user
                                        interfaces
                                    </p>
                                </div>
                            </div>

                            <div className="border-2 border-blue-300 rounded-2xl">
                                <div className="flex flex-col items-center justify-center px-8 py-4">
                                    <div className="flex items-center">
                                        <Icon
                                            icon="logos:redux"
                                            className="text-4xl m-2"
                                        />
                                        <p className="text-4xl text-blue-500">
                                            Redux
                                        </p>
                                    </div>

                                    <p className="text-center">
                                        A Predictable State Container for JS
                                        Apps
                                    </p>
                                </div>
                            </div>

                            <div className="border-2 border-blue-300 rounded-2xl">
                                <div className="flex flex-col items-center justify-center px-8 py-4">
                                    <div className="flex items-center">
                                        <Icon
                                            icon="logos:eslint"
                                            className="text-4xl m-2"
                                        />
                                        <p className="text-4xl text-blue-500">
                                            ESLint
                                        </p>
                                    </div>

                                    <p className="text-center">
                                        Find and fix problems in your JavaScript
                                        code
                                    </p>
                                </div>
                            </div>

                            <div className="border-2 border-blue-300 rounded-2xl">
                                <div className="flex flex-col items-center justify-center px-8 py-4">
                                    <div className="flex items-center">
                                        <Icon
                                            icon="logos:prettier"
                                            className="text-4xl m-2"
                                        />
                                        <p className="text-4xl text-blue-500">
                                            Prettier
                                        </p>
                                    </div>

                                    <p className="text-center">
                                        An opinionated code formatter
                                    </p>
                                </div>
                            </div>

                            <div className="border-2 border-blue-300 rounded-2xl">
                                <div className="flex flex-col items-center justify-center px-8 py-4">
                                    <div className="flex items-center">
                                        <Icon
                                            icon="simple-icons:tailwindcss"
                                            className="text-4xl m-2"
                                        />
                                        <p className="text-4xl text-blue-500">
                                            TailwindCSS
                                        </p>
                                    </div>

                                    <p className="text-center">
                                        A cool utility-first CSS framework
                                    </p>
                                </div>
                            </div>

                            <div className="border-2 border-blue-300 rounded-2xl">
                                <div className="flex flex-col items-center justify-center px-8 py-4">
                                    <div className="flex items-center">
                                        <Icon
                                            icon="simple-icons:iconify"
                                            className="text-4xl m-2"
                                        />
                                        <p className="text-4xl text-blue-500">
                                            Iconify
                                        </p>
                                    </div>

                                    <p className="text-center">
                                        Unified icons framework
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
